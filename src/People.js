import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Container, Row, Col } from 'reactstrap';
import { StructuredText } from './styles';

const Section = styled.section`
  padding: 6rem 0 3rem;
`

export default class People extends Component {
  render(){
    const { slice } = this.props;
    const items = slice.items.map(function(item, index){
      return(
        <Col md="3" sm="4" xs="6" className="text-center" key={index} >
          <div className="px-3 pb-5">
            <img src={item.image.url} alt="CleanStart - Hoarding & Junk Removal" className="rounded-circle img-fluid mb-3" />
              {RichText.render(item.name1)}
              <p className="text-primary">{RichText.asText(item.title1)}</p>
          </div>
        </Col>
      )
    })
    return(
      <Section className={`${slice.primary.color}`}>
        <Container fluid>
          <Row>
            {
              (slice.primary.position === 'top')
              ?
              <Fragment>
                <Col lg="12">
                  { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText >{RichText.render(slice.primary.body1)}</StructuredText>) }
                </Col>
                {items}
              </Fragment>
              :
              <Fragment>
                <Col lg={{ size: 3 }}>
                  { ((typeof slice.primary.body1 !== 'undefined' && typeof slice.primary.body1[0] !== 'undefined') && slice.primary.body1[0].text ) && (<StructuredText className="mb-5 mb-sm-5 mb-md-0 text-center text-md-left" >{RichText.render(slice.primary.body1)}</StructuredText>) }
                </Col>
                <Col lg={{ size: 9 }}>
                  <Row className={`${slice.primary.alignment} justify-content-center`}>
                    {items}
                  </Row>
                </Col>
              </Fragment>
            }
          </Row>
        </Container>
      </Section>
    )
  }
}
