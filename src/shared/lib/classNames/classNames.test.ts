import { classNames } from '@/shared/lib/classNames/classNames';

describe('classNames test', () => {
    test('one class', () => {
        expect(classNames('testClass')).toBe('testClass');
    });
    test('condition true class', () => {
        expect(classNames({ testClass: true })).toBe('testClass');
    });
    test('condition false class', () => {
        expect(classNames({ testClass: false })).toBe('');
    });
    test('class with condition true class', () => {
        expect(classNames('testClass1', { testClass2: true })).toBe('testClass1 testClass2');
    });
    test('class with condition false class', () => {
        expect(classNames('testClass1', { testClass2: false })).toBe('testClass1');
    });
    test('condition class first, regular class second', () => {
        expect(classNames({ testClass1: true }, 'testClass2')).toBe('testClass1 testClass2');
    });
    test("undefined condition shouldn't return class", () => {
        expect(classNames('testClass1', { testClass2: undefined })).toBe('testClass1');
    });
});
