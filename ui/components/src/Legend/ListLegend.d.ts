import { ListLegendItemProps } from './ListLegendItem';
import { LegendItem, SelectedLegendItemState } from './legend-model';
export interface ListLegendProps {
    items: LegendItem[];
    height: number;
    width: number;
    selectedItems: SelectedLegendItemState;
    onLegendItemClick: ListLegendItemProps['onClick'];
    onItemMouseOver: ListLegendItemProps['onMouseOver'];
    onItemMouseOut: ListLegendItemProps['onMouseOut'];
}
/**
 * ListLegend is used when legend.position is 'right' since legend items are
 * stacked. It is also used for `bottom` positioned legends when there are a
 * large number of items because it is virtualized and easier to visually scan
 * large numbers of items when there is a single item per row.
 */
export declare function ListLegend({ items, height, width, selectedItems, onLegendItemClick, onItemMouseOver, onItemMouseOut, }: ListLegendProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ListLegend.d.ts.map