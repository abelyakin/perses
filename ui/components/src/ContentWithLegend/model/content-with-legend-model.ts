// Copyright 2023 The Perses Authors
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
import { LegendPositions, LegendSize } from '@perses-dev/core';
import { LegendProps } from '../../Legend';

export type Dimensions = {
  width: number;
  height: number;
};

export interface ContentWithLegendProps {
  /**
   * Width of the overall component layout in pixels.
   */
  width: number;
  /**
   * Height of overall component layout in pixels.
   */
  height: number;
  /**
   * Child content to render next to the legend. May be a react node or a
   * function that returns a react node. The function provides the expected
   * height and width for the content, which can be useful for passing down
   * to chart components.
   */
  children: React.ReactNode | (({ width, height }: Dimensions) => React.ReactNode);

  /**
   * Size used for the legend.
   *
   * @default 'medium'
   */
  legendSize?: LegendSize;

  /**
   * Props to configure the legend. If not set, the content is rendered without
   * a legend.
   */
  legendProps?: Omit<LegendProps, 'width' | 'height'>;

  /**
   * Space to put between the children and the legend in pixels.
   */
  spacing?: number;

  /**
   * Minimum width required for the content specified by the `children` prop.
   * If this width cannot be maintained with a right positioned legend, the
   * legend will not be shown.
   */
  minChildrenWidth?: number;

  /**
   * Minimum height required for the content specified by the `children` prop.
   * If this width cannot be maintained with a bottom positioned legend, the
   * legend will not be shown.
   */
  minChildrenHeight?: number;
}

export interface ContentWithLegendLayoutOpts
  extends Required<Omit<ContentWithLegendProps, 'children' | 'legendProps'>> {
  legendProps?: ContentWithLegendProps['legendProps'];
  theme: Theme;
}

export interface ContentWithLegendLayout {
  legend: Dimensions & {
    show: boolean;
  };
  content: Dimensions;
  margin: {
    right: number;
    bottom: number;
  };
}

type LegendSizeConfig = Record<LegendSize, Record<LegendPositions, number>>;

export const TABLE_LEGEND_SIZE: LegendSizeConfig = {
  medium: {
    // 5 rows plus header. Value to be multiplied by row height in pixels.
    bottom: 6,

    // Pixel value
    right: 250,
  },
  small: {
    // 3 rows plus header. Value to be multiplied by row height in pixels.
    bottom: 4,

    // Pixel value
    right: 150,
  },
};
