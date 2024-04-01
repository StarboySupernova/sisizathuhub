import { FcComboChart } from 'react-icons/fc';

export default {
  name: 'objective',
  title: 'Objective',
  type: 'document',
  icon: FcComboChart,
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
        subtitle: 'objective',
      };
    },
  },
};
