import { Link as ReactRouterLinked } from "react-router-dom";
import {
  Background,
  Container,
  ButtonLink,
  Logo,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Group,
  Picture,
  Dropdown,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
  Image
} from "./styles/header";
import { useState } from "react";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children} </Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children} </Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children} </FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children} </Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children} </Link>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLinked to={to}>
      <Logo {...restProps} />
    </ReactRouterLinked>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Image = function HeaderImage({ src, ...restProps }) {
  return <Image {...restProps} src={`/images/misc/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onMouseOver={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active = {searchActive}
      />
    </Search>
  );
};

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}