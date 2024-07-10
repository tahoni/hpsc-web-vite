import {ImageSourceDescription} from "../../model/ImageSourceDescription.ts";
import ladyShooterOnIpscRangeImage from './images/lady-shooter-on-ipsc-range.png';
import ipscTargetWithBulletHoles from './images/ipsc-target-with-bullet-holes.png';

export class UnderConstructionImages {
    static underConstructionLadyImage: ImageSourceDescription =
        {source: ladyShooterOnIpscRangeImage,
            description: 'Lady shooter on IPSC range'};
    static underConstructionTargetImage: ImageSourceDescription =
        {source: ipscTargetWithBulletHoles,
            description: 'IPSC target with bullet holes'};
}
