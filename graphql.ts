
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateBookInput {
    title: string;
    price: number;
}

export interface UpdateBookInput {
    title?: Nullable<string>;
    price?: Nullable<number>;
}

export interface Book {
    title: string;
    price: number;
}

export interface Removed {
    message: string;
}

export interface IQuery {
    allbook(): Book[] | Promise<Book[]>;
    book(id: number): Book[] | Promise<Book[]>;
}

export interface IMutation {
    createBook(createBookInput: CreateBookInput): Book[] | Promise<Book[]>;
    updateBook(id: number, updateBookInput: UpdateBookInput): Book[] | Promise<Book[]>;
    removeBook(id: number): Removed[] | Promise<Removed[]>;
}

type Nullable<T> = T | null;
