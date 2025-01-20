def twoPointDist(x1: number, x2: number):
    return Math.sqrt((x1 - x2) ** 2)
def distance(x12: number, y1: number, x22: number, y2: number):
    return Math.sqrt((x12 - x22) ** 2 + (y1 - y2) ** 2)
def spring(sprite1: Sprite, sprite2: Sprite, distance2: number, damping: number):
    if distance(sprite1.x, sprite1.y, sprite2.x, sprite2.y) > distance2 - damping:
        if sprite2.x > sprite1.x:
            sprite2.vx = -twoPointDist(sprite2.x, sprite1.x)
        else:
            sprite2.vx = twoPointDist(sprite2.x, sprite1.x)
        if sprite2.y > sprite1.y:
            sprite2.vy = -twoPointDist(sprite2.y, sprite1.y)
        else:
            sprite2.vy = twoPointDist(sprite2.y, sprite1.y)
    elif distance(sprite1.x, sprite1.y, sprite2.x, sprite2.y) < distance2 + damping:
        if sprite2.x > sprite1.x:
            sprite2.vx = -twoPointDist(sprite2.x, sprite1.x)
        else:
            sprite2.vx = twoPointDist(sprite2.x, sprite1.x)
        if sprite2.y > sprite1.y:
            sprite2.vy = -twoPointDist(sprite2.y, sprite1.y)
        else:
            sprite2.vy = twoPointDist(sprite2.y, sprite1.y)





Projectile1 = sprites.create(img("""."""),
    SpriteKind.projectile)
Projectile2 = sprites.create(img("""."""),
    SpriteKind.projectile)
Projectile3 = sprites.create(img("""."""),
    SpriteKind.projectile)
Projectile4 = sprites.create(img("""."""),
    SpriteKind.projectile)
Projectile5 = sprites.create(img("""."""),
    SpriteKind.projectile)
Projectile6 = sprites.create(img("""."""),
    SpriteKind.projectile)
Projectile7 = sprites.create(img("""."""),
    SpriteKind.projectile)
Projectile8 = sprites.create(img("""."""),
    SpriteKind.projectile)
Player = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(Player)

picture: Image = image.create(scene.screen_width(), scene.screen_height())
showPicture = sprites.create(picture, SpriteKind.food)

def on_forever():
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

    lineList: List[Sprite] = [Player,Projectile1,Projectile2,Projectile3,Projectile4]
    for i in lineList:
        index = lineList.index_of(i)
        item = i
        prevItem = lineList.get(index-1)

        if index != 0:
            for v in [0,-1,1]:
                picture.draw_line(item.x, item.y+v, prevItem.x, prevItem.y+v, 3)
                picture.draw_line(item.x+v, item.y+v, prevItem.x+v, prevItem.y+v, 3)
                picture.draw_line(item.x+v, item.y, prevItem.x+v, prevItem.y, 3)
forever(on_forever)
