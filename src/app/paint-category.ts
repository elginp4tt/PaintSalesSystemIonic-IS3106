import { Paint } from './paint';

export class PaintCategory {
	paintCategoryId: number;
	categoryName: string;
	description: string;
	subCategoryEntities: PaintCategory[];
	parentCategoryEntity: PaintCategory;
	paints: Paint[];
	
	constructor(paintCategoryId?: number, categoryName?: string, description?: string, subCategoryEntities?: PaintCategory[], parentCategoryEntity?: PaintCategory, paints?: Paint[]) {
		this.paintCategoryId = paintCategoryId;
		this.categoryName = categoryName;
		this.description = description;
		this.subCategoryEntities = subCategoryEntities;
		this.parentCategoryEntity = parentCategoryEntity;
		this.paints = paints;
	}
}
