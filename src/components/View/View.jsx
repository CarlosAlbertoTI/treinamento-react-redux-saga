import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ViewHeaderWrapper from './ViewHeaderWrapper';
import ViewBodyWrapper from './ViewBodyWrapper';
import ViewFooterWrapper from './ViewFooterWrapper';
import ViewTitle from './ViewTitle';
import ViewSubtitle from './ViewSubtitle';

const Wrapper = styled.div``;

const View = ({
  title,
  subtitle,
  headerWrapper,
  header,
  bodyWrapper,
  footerWrapper,
  footer,
  children,
}) => (
  <Wrapper>
    {headerWrapper || <ViewHeaderWrapper>{header}</ViewHeaderWrapper>}
    {bodyWrapper || (
      <ViewBodyWrapper>
        {title && <ViewTitle>{title}</ViewTitle>}
        {subtitle && <ViewSubtitle>{title}</ViewSubtitle>}
        {children}
      </ViewBodyWrapper>
    )}
    {footerWrapper || <ViewFooterWrapper>{footer}</ViewFooterWrapper>}
  </Wrapper>
);

View.defaultProps = {
  title: undefined,
  subtitle: '',
  headerWrapper: undefined,
  header: undefined,
  bodyWrapper: undefined,
  footerWrapper: undefined,
  footer: undefined,
  children: undefined,
};

View.propTypes = {
  title: PropTypes.string,
  headerWrapper: PropTypes.node,
  header: PropTypes.node,
  bodyWrapper: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  footerWrapper: PropTypes.node,
  footer: PropTypes.node,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

View.Title = ViewTitle;
View.Subtitle = ViewSubtitle;
View.HeaderWrapper = ViewHeaderWrapper;
View.BodyWrapper = ViewBodyWrapper;
View.FooterWrapper = ViewFooterWrapper;

export default View;
