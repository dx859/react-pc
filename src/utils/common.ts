export function tranformTreeData(
  treeData: any,
  { title = 'title', value = 'id', children = 'children' } = {}
) {
  return treeData.map((item: any) => {
    if (title !== 'title') {
      item.title = item[title];
    }
    if (value !== 'value') {
      item.value = item[value];
    }

    item.key = item.value;

    if (item[children]) {
      item.children = tranformTreeData(item[children], {
        title,
        value,
        children,
      });
    }

    return item;
  });
}
