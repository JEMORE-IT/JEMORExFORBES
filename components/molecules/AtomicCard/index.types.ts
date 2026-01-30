import dynamicIconImports from 'lucide-react/dynamicIconImports';

export default interface AtomicCardProps {
  title?: string;
  subtitle?: string;
  description: string;
  immagine?: string;
  iconName?: keyof typeof dynamicIconImports;
  colorIcon?: string;
  className?: string;
}
