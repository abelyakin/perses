import { ListLegendItemProps } from './ListLegendItem';
import { LegendItem, SelectedLegendItemState } from './legend-model';
export interface CompactLegendProps {
    height: number;
    items: LegendItem[];
    selectedItems: SelectedLegendItemState;
    onLegendItemClick: ListLegendItemProps['onClick'];
    onItemMouseOver: ListLegendItemProps['onMouseOver'];
    onItemMouseOut: ListLegendItemProps['onMouseOut'];
}
/**
 * CompactLegend is default and used when legend items need to show side by side
 * which corresponds to when legend.position is `bottom` with a relatively small
 * number of items. The `ListLegend` is used for cases with large numbers of items
 * because it is virtualized.
 */
export declare function CompactLegend({ height, items, selectedItems, onLegendItemClick, onItemMouseOver, onItemMouseOut, }: CompactLegendProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CompactLegend.d.ts.map