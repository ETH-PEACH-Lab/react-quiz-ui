import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MarkdownEditorComponent from '../MarkdownEditorComponent';

describe('MarkdownEditor test', () => {
  test('Should show title', () => {
    const random = Math.random();
    render(
      <MarkdownEditorComponent
        src={String(random)}
        onChange={() => {}}></MarkdownEditorComponent>,
    );
    expect(screen.getByText(new RegExp(`${random}`, 'i'))).toBeDefined();
  });
});
