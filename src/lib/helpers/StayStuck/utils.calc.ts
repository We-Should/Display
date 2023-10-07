export const isInBounds = (object: { x: number; y: number }, bounds: { xMin: number; xMax: number; yMin: number; yMax: number }): boolean =>{
    return object.x >= bounds.xMin && object.x <= bounds.xMax && object.y >= bounds.yMin && object.y <= bounds.yMax;
}