import React from "react";
import styled from "styled-components";

const From = () => {
  return (
    <Div>
      <Row>
        <Text>Contact 'Postcard' Form</Text>
        <Stamp>No Stamp Required</Stamp>
      </Row>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <Row>
          <Message>
            <label htmlFor="message">Message*</label>
            <textarea
              name="message"
              id="message"
              required
              style={{
                width: "220px",
                height: "220px",
                border: ".1px solid black",
                background: "#f2fdfb",
              }}
            ></textarea>
          </Message>
          <Address>
            <label htmlFor="name">Name*</label>
            <Input type="text" name="name" id="name" required />

            <label htmlFor="email">Email *</label>
            <Input type="email" name="email" id="email" required />

            <label htmlFor="phone">Phone</label>
            <Input type="tel" name="phone" id="phone" />
          </Address>
        </Row>
        <RowBottom>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "220px",
            }}
          >
            <Checkbox>
              <Tick type="checkbox" name="consent" id="consent" required />
              <CheckboxLabel htmlFor="consent">
                Please agree to be contacted regarding this message *
              </CheckboxLabel>
            </Checkbox>
          </div>
          <div>
            <Button>Send</Button>
          </div>
        </RowBottom>
      </form>
    </Div>
  );
};
const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 520px;
  height: auto;
  border: 1.6px solid black;
  margin-bottom: 60px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 12px;
`;

const Text = styled.p`
  max-width: 80px;
  font-size: 14px;
  text-align: left;
  line-height: 1.1;
  font-weight: 500;
  letter-spacing: -1px;
  margin-left: 32px;
`;

const Stamp = styled.div`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 86px;
  border: solid 1.6px black;
  text-align: left;
  font-size: 10px;
  padding: 6px;
`;

const Message = styled.div`
  height: 144px;
  width: 50%;
  position: relative;
  top: -40px;
  text-align: left;
  padding: 12px 12px 12px 8px;
`;
const Address = styled.div`
  margin-top: 12px;
  width: 50%;
  text-align: left;
  padding: 12px;
  font-size: 14px;
  border: solid;
  border-width: 0 0 0 2px;
`;

const RowBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
`;

const Checkbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 11px;
  line-height: 1.1;
  margin-left: 12px;
`;

const Tick = styled.input`
  width: 34px;
  height: 24px;
  border: 1px solid black;
  margin-right: 12px;
`;

const Button = styled.button`
  display: flex;
  background: #023c71;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  height: 40px;
  padding: 0px 18px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: #015fb6;
  }
`;

const Input = styled.input`
  border-bottom: 0.1px solid black;
  background: #f2fdfb;
  margin-top: 16px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
`;

const CheckboxLabel = styled.label``;

export default From;
