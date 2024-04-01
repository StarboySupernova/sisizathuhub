import React from 'react';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';

function ValueItem({ description }) {
  return (
    <CategoryItemStyles>
      <div className="text">
        <MyPortableText value={description} />
      </div>
      <Button to="/" variant={buttonTypes.secondary}>
        More
      </Button>
    </CategoryItemStyles>
  );
}

export default ValueItem;
