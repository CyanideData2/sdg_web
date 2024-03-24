import {
  EmojiHappyIcon,
  ChipIcon,
  CursorClickIcon,
  ChartPieIcon,
  GlobeIcon,
  UserGroupIcon,
  SearchIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";

import appFrontScreenshot from "../public/img/presentation.png";
import problemImage from "../public/img/problemImage.jpg";

const benefitOne = {
  title: "The solution",
  image: appFrontScreenshot,
  bullets: [
    {
      title: "Engagement",
      desc: "Our platform enables Espoo citizens to report issues they encounter in their daily lives.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Transparency",
      desc: "Citizens make informed suggestions on how to distribute the district's real budget",
      icon: <SearchIcon />,
    },
    {
      title: "Impact",
      desc: "Citizens can make an impact by voting on real projects to be carried out by local authorities",
      icon: <ChipIcon />,
    },
    {
      title: "Feedback",
      desc: "Citizens are given evidence that their votes influenced the actions taken by local authorities",
      icon: <NewspaperIcon />,
    },
  ],
};

const benefitTwo = {
  title: "The Problem",
  image: problemImage,
  bullets: [
    {
      title: "Climate crisis",
      desc: "Extreme weather caused by climate change puts a strain on public infrastructure",
      icon: <GlobeIcon />,
    },
    {
      title: "Lack of data",
      desc: "Though the biggest buildings and bridges are closely monitored, minor infrastructure issues are hard to predict, yet they can limit accessibility for residents.",
      icon: <ChartPieIcon />,
    },
    {
      title: "Citizen disilusion",
      desc: "Neighbours can submit requests and complains, but research shows that, without a proper feedback loop, these can feel impactless.",
      icon: <UserGroupIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
