import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";
import member5 from "../assets/member5.jpg";
import member6 from "../assets/member6.jpg";
import paidink from "../assets/paidink-photo.png";

export const TEAM_AVATAR_FALLBACKS = [
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
];

export const PRODUCT_IMAGE_FALLBACKS = {
  paidink,
};

export function getTeamAvatar(member, index) {
  if (member.profilePicture?.trim()) {
    return member.profilePicture;
  }
  return TEAM_AVATAR_FALLBACKS[index % TEAM_AVATAR_FALLBACKS.length];
}

export function getProductImage(product) {
  if (product.image?.trim()) {
    return product.image;
  }
  return PRODUCT_IMAGE_FALLBACKS[product.id] ?? null;
}
