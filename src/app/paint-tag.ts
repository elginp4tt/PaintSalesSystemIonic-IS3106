export class PaintTag {
	tagId: number;
	tagName: string;
	paints: Paint[];
	
	constructor(tagId?: number, tagName?: string, paints?: Paint[]) {
		this.tagId = tagId;
		this.tagName = tagName;
		this.paints = paints;
	}
}
