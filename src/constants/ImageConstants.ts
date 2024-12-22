import {ImageWithSourceAndDescription} from '@tahoni/tahoni-lib-react';
import leftShooter
    from '/assets/images/pictures/shooter-left-transparent.png';
import rightShooter
    from '/assets/images/pictures/shooter-right-transparent.png';
import targetWithBulletHoles
    from '/assets/images/pictures/ipsc-target-with-bullet-holes.png';

export const LEFT_SHOOTER = 'leftShooter';
export const RIGHT_SHOOTER = 'rightShooter';
export const TARGET_WITH_BULLET_HOLES = 'targetWithBulletHoles';

export const imageConstants: Map<string, ImageWithSourceAndDescription> =
    new Map<string, ImageWithSourceAndDescription>([
        [LEFT_SHOOTER,
            new ImageWithSourceAndDescription(leftShooter, 'Shooter')],
        [RIGHT_SHOOTER,
            new ImageWithSourceAndDescription(rightShooter, 'Shooter')],
        [TARGET_WITH_BULLET_HOLES,
            new ImageWithSourceAndDescription(targetWithBulletHoles,
                'IPSC target with bullet holes')],
    ]
)
