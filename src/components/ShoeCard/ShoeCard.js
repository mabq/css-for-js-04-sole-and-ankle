import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  const status = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'just-released'
      : 'default'

  const discountFlag = status === 'on-sale'
    ? <SaleFlag>Sale</SaleFlag>
    : status === 'just-released'
      ? <ReleaseFlag>Just Released!</ReleaseFlag>
      : null

  const regularPriceTag = status === 'on-sale'
    ? <PriceDue>{formatPrice(price)}</PriceDue>
    : <span>{formatPrice(price)}</span>

  const salePriceTag = status === 'on-sale'
    ? <PriceOnSale>{formatPrice(salePrice)}</PriceOnSale>
    : null

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <Image alt="" src={imageSrc} />
        {discountFlag}
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          {regularPriceTag}
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {salePriceTag}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
`

const Wrapper = styled.article`
  position: relative;
  color: ${COLORS.gray[900]};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const SaleFlag = styled.div`
  position: absolute;
  top: 8px;
  right: -4px;
  padding: 4px 11px 5px;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.white};
  border-radius: 2px;
  background-color: ${COLORS.primary};
`;

const ReleaseFlag = styled(SaleFlag)`
  background-color: ${COLORS.secondary};
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
`;

const PriceDue = styled.span`
  color: ${COLORS.gray[700]};
  text-decoration: line-through;
`

const PriceOnSale = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const ColorInfo = styled.span`
  color: ${COLORS.gray[700]};
`;

export default ShoeCard;
