import routes from '@/config/routes';
import { HomeIcon } from '@/components/icons/home';
import { FarmIcon } from '@/components/icons/farm';
import { PoolIcon } from '@/components/icons/pool';
import { ProfileIcon } from '@/components/icons/profile';
import { DiskIcon } from '@/components/icons/disk';
import { ExchangeIcon } from '@/components/icons/exchange';
import { VoteIcon } from '@/components/icons/vote-icon';
import { PlusCircle } from '@/components/icons/plus-circle';
import { CompassIcon } from '@/components/icons/compass';
import { LivePricing } from '@/components/icons/live-pricing';
import { LockIcon } from '@/components/icons/lock-icon';
import { TradingBotIcon } from '@/components/icons/trading-bot-icon';

export const defaultMenuItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    href: routes.home,
  },
  {
    name: 'Profile',
    icon: <ProfileIcon />,
    href: routes.profile,
  },
  {
    name: 'Vote',
    icon: <VoteIcon />,
    href: routes.vote,
    // dropdownItems: [
    //   {
    //     name: 'Explore',
    //     href: routes.vote,
    //   },
    //   {
    //     name: 'Vote with SourceRED',
    //     href: routes.proposals,
    //   },
    //   {
    //     name: 'Create proposal',
    //     href: routes.createProposal,
    //   },
    // ],
  },
  {
    name: 'Authentication',
    icon: <LockIcon className="w-[18px]" />,
    href: routes.signIn,
    dropdownItems: [
      {
        name: 'Sign in',
        href: routes.signIn,
      },
      {
        name: 'Sign up',
        href: routes.signUp,
      },
      {
        name: 'Reset pin',
        href: routes.resetPin,
      },
      {
        name: 'Forget password',
        href: routes.forgetPassword,
      },
    ],
  },
];

export const MinimalMenuItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    href: routes.home,
  },
  {
    name: 'Pages',
    icon: <VoteIcon />,
    href: routes.pages,
    dropdownItems: [
      {
        name: 'Profile',
        icon: <ProfileIcon />,
        href: routes.profile,
      },
      {
        name: 'Liquidity',
        icon: <PoolIcon />,
        href: routes.liquidity,
      },
      {
        name: 'Vote',
        icon: <VoteIcon />,
        href: routes.vote,
        // dropdownItems: [
        //   {
        //     name: 'Explore',
        //     href: routes.vote,
        //   },
        //   {
        //     name: 'Vote with SourceRED',
        //     href: routes.proposals,
        //   },
        //   {
        //     name: 'Create proposal',
        //     href: routes.createProposal,
        //   },
        // ],
      },
      {
        name: 'Authentication',
        icon: <LockIcon className="w-[18px]" />,
        href: routes.signIn,
        dropdownItems: [
          {
            name: 'Sign in',
            href: routes.signIn,
          },
          {
            name: 'Sign up',
            href: routes.signUp,
          },
          {
            name: 'Reset pin',
            href: routes.resetPin,
          },
          {
            name: 'Forget password',
            href: routes.forgetPassword,
          },
        ],
      },
    ],
  },
];
