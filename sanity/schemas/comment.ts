import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{type:"user"}],
      validation: Rule => Rule.required()
    }),
    defineField({
        name: 'post',
        title: 'Post',
        type: 'reference',
        to: [{type:"post"}],
        validation: Rule => Rule.required()
    }),
    defineField({
        name: 'comment',
        title: 'Comment',
        type: 'string',
        validation: Rule => Rule.required()
    }),
    defineField({
        name: 'reply',
        title: 'Reply',
        type: 'reference',
        to : [{type: "comment"}],
    }),      
  ],
  preview: {
    select: {
      comment: 'comment',
      user: 'user',
      post: "post"
    },
  },
})
