import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { ArticleStateType, defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {

	const [optionStyle, setOptionStyle] = useState(defaultArticleState);

	function updateOptionStyle(options: ArticleStateType) {
		setOptionStyle(options)
	}
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': optionStyle.fontFamilyOption.value,
					'--font-size': optionStyle.fontSizeOption.value,
					'--font-color': optionStyle.fontColor.value,
					'--container-width': optionStyle.contentWidth.value,
					'--bg-color': optionStyle.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm updateOptionStyle={updateOptionStyle} optionStyle={optionStyle} />
			<Article  />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
