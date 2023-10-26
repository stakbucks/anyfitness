export default function isDisabledFeature(str: string): boolean {
  return str.includes('장애인') ? true : false;
}
