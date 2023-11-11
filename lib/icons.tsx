import {
  Wallet,
  User,
  Moon,
  SunMedium,
  Twitter,
  ChefHat,
  CalendarCheck, 
  Car, 
  HeartPulse, 
  Cookie, 
  ShoppingCart, 
  PiggyBank, 
  ShoppingBag, 
  Building2, 
  Plane, 
  Euro, 
  Heart, 
  BookOpenCheck, 
  Clover, 
  Scroll, 
  ArrowBigDown, 
  Skull, 
  Home, 
  Landmark, 
  Coins,
  Puzzle, 
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: Wallet,
  profil: User,
}

type CategoryMouvementType = {
  [key: string]: JSX.Element;
};

export const categorieMouvement: CategoryMouvementType = {
    'Voiture': <Car />,
    'Autres': <Puzzle />,
    'Abonnements': <CalendarCheck />,
    'Soins':  <HeartPulse />,
    'Sorties': <Cookie />,
    'Courses': <ShoppingCart />,
    'Dividendes': <Wallet />,
    'Economies': <PiggyBank />,
    'Shopping': <ShoppingBag />,
    'FraisPro': <Building2 />,
    'Voyage': <Plane />,
    'Salaire': <Euro />,
    'Compte joint': <Heart />,
    'Remboursements': <Landmark />,
    'Ventes': <BookOpenCheck />,
    'Assurance': <Clover />,
    'Impôts': <Scroll />,
    'Logement': <Home />,
    'Retrait': <ArrowBigDown />,
    'Amende': <Skull />,
    'Virement': <Coins />,
    'RIE': <ChefHat />,
    'Commodités': <Home/> ,
    'Nécessités': <ShoppingCart />, 
    'Epargne': <PiggyBank /> ,
    'Gains' : <Euro />,
    'Epargne Retraite' : <Euro />
  }
  