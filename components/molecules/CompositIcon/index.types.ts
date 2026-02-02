export type CompositIconType = 'calendar' | 'map' | 'users';

export default interface CompositIconProps {
  icon: CompositIconType;
  colorIcon: string;
  title: string;
  subtitle: string;
}
