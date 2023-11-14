import { BADGE_STANDARD } from '../../constants/badge.js';

class BadgeEvent {
  constructor(totalBenefitPrice) {
    this.totalBenefitPrice = totalBenefitPrice;
  }

  calculateBadgeType() {
    let result = BADGE_STANDARD.defaultType;
    const quot = Math.floor(this.totalBenefitPrice / BADGE_STANDARD.basePrice);

    BADGE_STANDARD.types.forEach(type => {
      if (quot >= BADGE_STANDARD[type]) {
        result = type;
      }
    });

    return result;
  }
}

export default BadgeEvent;
