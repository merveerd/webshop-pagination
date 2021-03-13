#### Usages

- Pagination with using React-Paginate library
- Redux-Saga for handling async requests in state management
- Styled components usage for styling in general
- Prop-types for prop definitions
- Jest for partial testing

#### Note:

The pagination is made by server-side directly for loading the page items. The reason is for that in the real life, that would be the same as this approach. But in this project; for the tag and company count, the whole items data is requested too. In the real life, I think there would be tags(categories) collection too with holding id’s of items. So also that would be handled by requesting the count of each tag directly to the tag collection.
