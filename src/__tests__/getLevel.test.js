jest.mock('../http');

import fetchData from "../http";
import { createFetchDataMock } from "./fetchData.mock";
import { getLevel } from "../getLevel";

describe('getLevel', () => {
    test('should return level 11', () => {
        const fetchDataMock = createFetchDataMock(11);

        fetchData.mockImplementation(fetchDataMock);

        expect(getLevel(40)).toBe('Ваш текущий уровень: 11');
    });

    test('should return error', () => {
        const fetchDataMock = createFetchDataMock();

        fetchData.mockImplementation(fetchDataMock);
        
        expect(getLevel(40)).toBe('Информация об уровне временно недоступна');
    });
});