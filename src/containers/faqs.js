import {Accordion,OptForm} from "../components"
import FAQsData from "../fixtures/faq"

export function FAQsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {FAQsData.map(item => 
      <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
      </Accordion.Item>)}
      <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Get Started</OptForm.Button>
      </OptForm>
    </Accordion>
  );
}