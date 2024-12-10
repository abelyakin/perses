// Copyright 2024 The Perses Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Theme } from '@mui/material';
import { getLegendMode, LegendMode, LegendSize } from '@perses-dev/core';
import { LegendItem, LegendProps } from '../../Legend';
import { getTableCellLayout, TableColumnConfig } from '../../Table/model/table-model';
import {
  ContentWithLegendLayout,
  ContentWithLegendLayoutOpts,
  Dimensions,
  TABLE_LEGEND_SIZE,
} from './content-with-legend-model';

const LEGEND_HEIGHT_SM = 40;
const LEGEND_HEIGHT_LG = 100;
const LEGEND_ITEM_HEIGHT = 26;
const LEGEND_ITEM_SPACING = 24;
const CHAR_WIDTH = 6;

function calculateLegendHeight({
  position,
  width,
  legendProps,
  legendSize,
  mode,
  theme,
}: {
  position: 'bottom' | 'right';
  width: number;
  legendProps: Omit<LegendProps, 'width' | 'height'>;
  legendSize: LegendSize;
  mode: LegendMode;
  theme: Theme;
}): number {
  if (mode === 'list') {
    if (position === 'right') {
      return width;
    } else {
      const itemsWidth = legendProps.data.reduce((acc: number, item: LegendItem) => {
        const itemLength = item.label.length * CHAR_WIDTH + LEGEND_ITEM_SPACING;
        return acc + itemLength;
      }, 0);

      const rowCount = Math.ceil(itemsWidth / width);

      const calculatedHeight = rowCount * LEGEND_ITEM_HEIGHT;
      return Math.min(LEGEND_HEIGHT_LG, Math.max(LEGEND_HEIGHT_SM, calculatedHeight));
    }
  } else {
    const tableLayout = getTableCellLayout(theme, 'compact');
    const rowsToShow = Math.min(TABLE_LEGEND_SIZE[legendSize]['bottom'], legendProps.data.length + 1);
    return position === 'bottom' ? rowsToShow * tableLayout.height : width;
  }
}

function calculateLegendWidth({
  position,
  width,
  legendProps,
  legendSize,
  mode,
}: {
  position: 'bottom' | 'right';
  width: number;
  legendProps: Omit<LegendProps, 'width' | 'height'>;
  legendSize: LegendSize;
  mode: LegendMode;
}): number {
  if (mode === 'list') {
    return position === 'right' ? 200 : width;
  } else {
    const tableColumns = legendProps?.tableProps?.columns || [];
    const columnsWidth = tableColumns.reduce((total: number, col: TableColumnConfig<LegendItem>) => {
      if (typeof col.width === 'number') {
        total += col.width;
      }
      return total;
    }, 0);
    return position === 'right' ? TABLE_LEGEND_SIZE[legendSize]['right'] + columnsWidth : width;
  }
}

function calculateContentLayout(
  position: string,
  width: number,
  height: number,
  legendWidth: number,
  legendHeight: number,
  spacing: number,
  minChildrenWidth: number,
  minChildrenHeight: number
): Dimensions {
  const contentWidth = position === 'right' ? width - legendWidth - spacing : width;
  const contentHeight = position === 'bottom' ? height - legendHeight - spacing : height;

  if (
    (position === 'right' && contentWidth < minChildrenWidth) ||
    (position === 'bottom' && contentHeight < minChildrenHeight)
  ) {
    return { width, height };
  }

  return { width: contentWidth, height: contentHeight };
}

export function getContentWithLegendLayout({
  width,
  height,
  legendProps,
  legendSize,
  minChildrenHeight,
  minChildrenWidth,
  spacing,
  theme,
}: ContentWithLegendLayoutOpts): ContentWithLegendLayout {
  const legendOptions = legendProps?.options;
  const hasLegend = !!legendOptions;

  const noLegendLayout: ContentWithLegendLayout = {
    legend: {
      show: false,
      width: 0,
      height: 0,
    },
    content: {
      width,
      height,
    },
    margin: {
      right: 0,
      bottom: 0,
    },
  };

  if (!hasLegend) {
    return noLegendLayout;
  }

  const { position } = legendOptions;
  const mode = getLegendMode(legendOptions.mode);

  const legendWidth = calculateLegendWidth({ position, width, legendProps, legendSize, mode });
  const legendHeight = calculateLegendHeight({ position, width, legendProps, legendSize, mode, theme });

  const contentLayout = calculateContentLayout(
    position,
    width,
    height,
    legendWidth,
    legendHeight,
    spacing,
    minChildrenWidth,
    minChildrenHeight
  );

  if (contentLayout.width === width && contentLayout.height === height) {
    return noLegendLayout;
  }

  return {
    legend: {
      width: legendWidth,
      height: legendHeight,
      show: true,
    },
    content: {
      width: contentLayout.width,
      height: contentLayout.height,
    },
    margin: {
      right: position === 'right' ? spacing : 0,
      bottom: position === 'bottom' ? spacing : 0,
    },
  };
}
