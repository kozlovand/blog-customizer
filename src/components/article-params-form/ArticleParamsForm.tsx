import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { Select } from 'src/ui/select';
import { ArticleStateType, OptionType, backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import {  useRef, useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group/RadioGroup';
import { Separator } from 'src/ui/separator/Separator';
import { Text } from 'src/ui/text';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';

type props = {
	updateOptionStyle: (options: ArticleStateType) => void
	optionStyle: ArticleStateType
	}
;

export const ArticleParamsForm = (props: props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [options, setOptions] = useState({...props.optionStyle});

	const ref =useRef <HTMLDivElement>(null)
	const refForm =useRef <HTMLFormElement>(null)


	function handleSetFontFamily(option: OptionType) {
		setOptions({ ...options,
			fontFamilyOption: option })
	}

	function handleSetFontSize(option: OptionType) {
		setOptions({ ...options,
			fontSizeOption: option })
	}

	function handleSetFontColor(option: OptionType) {
		setOptions({ ...options,
			fontColor: option })
	}

	function handleSetbackgroundColor(option: OptionType) {
		setOptions({ ...options,
			backgroundColor: option })
	}

	function handleSetWidth(option: OptionType) {
		setOptions({ ...options,
			contentWidth: option })
	}

	function handleOptionClick(){
		setIsOpen(!isOpen)
	}

	function resetForm() {
		props.updateOptionStyle(defaultArticleState)
		setOptions(defaultArticleState)
	}


	refForm.current?.addEventListener('submit', (e: Event) => {
		e.preventDefault();
		props.updateOptionStyle(options)

	});

	useOutsideClickClose({
		isOpen,
		onChange: setIsOpen,
		rootRef: ref,
	})

	return (
		<>
		<div ref={ref}>
			<ArrowButton isOpen={isOpen} onClick={handleOptionClick} />
			<aside  className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form ref={refForm} className={styles.form}>
					<Text size={31} weight={800} uppercase>Задайте параметры</Text>

					<Select options={fontFamilyOptions} selected={options.fontFamilyOption} title='Шрифт'  onChange={handleSetFontFamily}  />

					<RadioGroup name={'radio'} title='Размер шрифта' options={fontSizeOptions} selected={options.fontSizeOption} onChange={handleSetFontSize}/>

					<Select options={fontColors} selected={options.fontColor} title='Цвет шрифта'  onChange={handleSetFontColor}/>

					<Separator />

					<Select options={backgroundColors} selected={options.backgroundColor} title='Цвет фона' onChange={handleSetbackgroundColor} />

					<Select options={contentWidthArr} selected={options.contentWidth} title='Ширина контента' onChange={ handleSetWidth} />

					<div className={styles.bottomContainer}>
						<Button  onClick={resetForm} title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</div>
		</>
	);
};
