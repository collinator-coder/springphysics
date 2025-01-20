function twoPointDist(x1: number, x2: number): number {
    return Math.sqrt((x1 - x2) ** 2)
}

function distance(x12: number, y1: number, x22: number, y2: number): number {
    return Math.sqrt((x12 - x22) ** 2 + (y1 - y2) ** 2)
}

function spring(sprite1: Sprite, sprite2: Sprite, distance2: number, damping: number) {
    if (distance(sprite1.x, sprite1.y, sprite2.x, sprite2.y) > distance2 - damping) {
        if (sprite2.x > sprite1.x) {
            sprite2.vx = -twoPointDist(sprite2.x, sprite1.x)
        } else {
            sprite2.vx = twoPointDist(sprite2.x, sprite1.x)
        }
        
        if (sprite2.y > sprite1.y) {
            sprite2.vy = -twoPointDist(sprite2.y, sprite1.y)
        } else {
            sprite2.vy = twoPointDist(sprite2.y, sprite1.y)
        }
        
    } else if (distance(sprite1.x, sprite1.y, sprite2.x, sprite2.y) < distance2 + damping) {
        if (sprite2.x > sprite1.x) {
            sprite2.vx = -twoPointDist(sprite2.x, sprite1.x)
        } else {
            sprite2.vx = twoPointDist(sprite2.x, sprite1.x)
        }
        
        if (sprite2.y > sprite1.y) {
            sprite2.vy = -twoPointDist(sprite2.y, sprite1.y)
        } else {
            sprite2.vy = twoPointDist(sprite2.y, sprite1.y)
        }
        
    }
    
}

let Projectile1 = sprites.create(img`.`, SpriteKind.Projectile)
let Projectile2 = sprites.create(img`.`, SpriteKind.Projectile)
let Projectile3 = sprites.create(img`.`, SpriteKind.Projectile)
let Projectile4 = sprites.create(img`.`, SpriteKind.Projectile)
let Projectile5 = sprites.create(img`.`, SpriteKind.Projectile)
let Projectile6 = sprites.create(img`.`, SpriteKind.Projectile)
let Projectile7 = sprites.create(img`.`, SpriteKind.Projectile)
let Projectile8 = sprites.create(img`.`, SpriteKind.Projectile)
let Player = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 . . . . . . . . . . . . . . 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        `, SpriteKind.Player)
controller.moveSprite(Player)
let picture = image.create(scene.screenWidth(), scene.screenHeight())
let showPicture = sprites.create(picture, SpriteKind.Food)
forever(function on_forever() {
    let index: number;
    let item: Sprite;
    let prevItem: Sprite;
    picture.fill(0)
    spring(Player, Projectile1, 5, 1)
    spring(Projectile1, Projectile2, 5, 1)
    spring(Projectile2, Projectile3, 5, 1)
    spring(Projectile3, Projectile4, 5, 1)
    spring(Projectile4, Projectile5, 5, 1)
    spring(Projectile5, Projectile6, 5, 1)
    spring(Projectile6, Projectile7, 5, 1)
    spring(Projectile7, Projectile8, 5, 1)
    Projectile1.vy += 10
    Projectile2.vy += 10
    Projectile3.vy += 10
    Projectile4.vy += 10
    Projectile5.vy += 10
    Projectile6.vy += 10
    Projectile7.vy += 10
    Projectile8.vy += 10
    let lineList = [Player, Projectile1, Projectile2, Projectile3, Projectile4]
    for (let i of lineList) {
        index = lineList.indexOf(i)
        item = i
        prevItem = lineList.get(index - 1)
        if (index != 0) {
            for (let v of [0, -1, 1]) {
                picture.drawLine(item.x, item.y + v, prevItem.x, prevItem.y + v, 3)
                picture.drawLine(item.x + v, item.y + v, prevItem.x + v, prevItem.y + v, 3)
                picture.drawLine(item.x + v, item.y, prevItem.x + v, prevItem.y, 3)
            }
        }
        
    }
})
