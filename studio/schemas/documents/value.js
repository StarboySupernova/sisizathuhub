import { FcIdea } from 'react-icons/fc';

export default {
  name: 'value',
  title: 'Value',
  type: 'document',
  icon: FcIdea,
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'description',
    },
    prepare({ description }) {
      return {
        title: description,
        subtitle: 'value',
      };
    },
  },
};
