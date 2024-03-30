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
    {
      name: 'slug',
      title: 'Tag',
      type: 'slug',
      options: {
        source: 'description',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'description',
      slug: 'slug',
    },
    prepare({ description, slug }) {
      return {
        title: description,
        subtitle: slug.current,
      };
    },
  },
};
