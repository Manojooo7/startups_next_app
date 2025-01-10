// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())
    .items([
      S.listItem()
        .title('Authors')
        .child(
          S.documentTypeList('author')
            .title('Authors')
        ),
      S.listItem()
        .title('Startups')
        .child(
          S.documentTypeList('startup')
            .title('Startups')
        )
    ])
