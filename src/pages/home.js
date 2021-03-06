import {FAQsContainer} from "../containers/faqs";
import {FooterContainer} from "../containers/footer";
import {HeaderContainer} from "../containers/header";
import {JumbotronContainer} from "../containers/jumbotron";
import {Feature, OptForm} from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>    
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime. </Feature.SubTitle>
          <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>  
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </>
  );
}
