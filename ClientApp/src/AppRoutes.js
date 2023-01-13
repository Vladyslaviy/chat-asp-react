import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { TestAsp } from "./components/TestAsp";

const AppRoutes = [
    {
        path: '/test-asp',
        element: <TestAsp />
    },
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    }
    
];

export default AppRoutes;
