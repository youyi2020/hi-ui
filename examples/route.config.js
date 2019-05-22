import navConfig from './nav.config';

const load = function(path) {
    return r => require.ensure([], () =>
        r(require(`./pages/${path}.vue`))
    );
};

const loadDocs = function(path) {
    return r => require.ensure([], () =>
        r(require(`./docs${path}.md`))
    );
};

const registerRoute = (navs) => {
  let route = [];
  route.push({
    path: `/component`,
    redirect: `/component/installation`,
    component: load( 'component'),
    children: []
  });
  navs.forEach(nav => {
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav);
          });
        });
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav);
        });
      } else {
        addRoute(nav);
      }
    });

  function addRoute(page) {
    const component = loadDocs(page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component
    };
    route[0].children.push(child);
  }
  return route;
};

let defaultPath = '/component/button'



let route = registerRoute(navConfig);

route = route.concat([{
    path: '/',
    redirect: defaultPath
}]);

console.log(route);

export default route;
