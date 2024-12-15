import { ArticleStateType, defaultArticleState } from 'src/constants/articleProps';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { Article } from '../article/Article';
import styles from './App.module.scss';
import clsx from 'clsx';
import { CSSProperties, useState } from 'react';

export const App = () => {

	const [optionStyle, setOptionStyle] = useState(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': optionStyle.fontFamilyOption.value,
					'--font-size': optionStyle.fontSizeOption.value,
					'--font-color': optionStyle.fontColor.value,
					'--container-width': optionStyle.contentWidth.value,
					'--bg-color': optionStyle.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm updateOptionStyle={setOptionStyle} optionStyle={optionStyle} />
			<Article  />
		</main>
	);
};
