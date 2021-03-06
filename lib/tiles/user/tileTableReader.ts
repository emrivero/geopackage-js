/**
 * tileTableReader module.
 * @module tiles/user/tileTableReader
 */
import { UserTableReader } from '../../user/userTableReader';
import { TileTable } from './tileTable';
import { TileColumn } from './tileColumn';
import { TileMatrixSet } from '../matrixset/tileMatrixSet';
import { GeoPackage } from '../../geoPackage';
import { TableColumn } from '../../db/table/tableColumn';

/**
 * Reads the metadata from an existing tile table
 * @class TileTableReader
 */
export class TileTableReader extends UserTableReader<TileColumn, TileTable> {
  constructor(public tileMatrixSet: TileMatrixSet) {
    super(tileMatrixSet.table_name);
  }

  readTileTable(geoPackage: GeoPackage): TileTable {
    return this.readTable(geoPackage.database) as TileTable;
  }

  /**
   * @inheritDoc
   */
  createTable(tableName: string, columns: TileColumn[]): TileTable {
    return new TileTable(tableName, columns);
  }

  /**
   * @inheritDoc
   */
  createColumn(tableColumn: TableColumn): TileColumn {
    return new TileColumn(tableColumn.index, tableColumn.name, tableColumn.dataType, tableColumn.max, tableColumn.notNull, tableColumn.defaultValue, tableColumn.primaryKey, tableColumn.autoincrement);
  }
}
