import { Flowbite, DarkThemeToggle } from 'flowbite-react';
import { TWPrifex } from './components/TWPrefix';

export default function App() {
  return (
    <Flowbite>
      <TWPrifex />
      <DarkThemeToggle className="absolute top-2 right-2" />
    </Flowbite>
  );
}
