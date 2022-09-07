export class SpriteAnimation {

    tiles = []
    key = ''

    constructor(tiles, key) {
        this.tiles = tiles;
        this.key = key;
    }
}

export const IDLE_RIGHT = new SpriteAnimation([0, 1, 2, 3], 'IDLE_RIGHT');
export const RUN_RIGHT = new SpriteAnimation([0,1,2,3,4,5,6,7,8,9], 'RUN_RIGHT');
export const IDLE_LEFT = new SpriteAnimation([0, 1, 2, 3], 'IDLE_LEFT');
export const RUN_LEFT = new SpriteAnimation([0,1,2,3,4,5,6,7,8,9], 'RUN_LEFT');