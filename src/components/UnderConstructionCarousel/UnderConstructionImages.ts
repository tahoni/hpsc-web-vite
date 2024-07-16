import {ImageSourceDescription} from "@tahoni/tahoni-lib-react";
import ladyShooterOnIpscRangeImage from './images/lady-shooter-on-ipsc-range.png';
import ipscTargetWithBulletHoles from './images/ipsc-target-with-bullet-holes.png';

export class UnderConstructionImages {
    static underConstructionLadyImage: ImageSourceDescription =
        {image: ladyShooterOnIpscRangeImage,
            description: 'Lady shooter on IPSC range'};
    static underConstructionTargetImage: ImageSourceDescription =
        {image: ipscTargetWithBulletHoles,
            description: 'IPSC target with bullet holes'};
}
