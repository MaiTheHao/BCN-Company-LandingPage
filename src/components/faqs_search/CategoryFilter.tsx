import React, { useState, useEffect, useRef } from 'react';
import styles from './FQASSearch.module.scss';
import { montserrat, open_sans } from '@/app/fonts';
import Image from 'next/image';

interface CategoryFilterProps {
	categories: string[];
	selectedCategories: string[];
	onCategoryChange: (categories: string[]) => void;
}

export default function CategoryFilter({ categories, selectedCategories, onCategoryChange }: CategoryFilterProps) {
	const [isOpen, setIsOpen] = useState(false);
	const filterRef = useRef<HTMLDivElement>(null);

	const toggleCategory = (category: string) => {
		if (selectedCategories.includes(category)) {
			onCategoryChange(selectedCategories.filter((c) => c !== category));
		} else {
			onCategoryChange([...selectedCategories, category]);
		}
	};

	const clearFilters = () => {
		onCategoryChange([]);
	};

	// Handle click outside to close the filter panel
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		// Add event listener when panel is open
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		// Clean up the event listener
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className={styles.category_filter_container} ref={filterRef}>
			<button onClick={() => setIsOpen(!isOpen)} className={`${styles.filter_toggle} ${montserrat.className}`}>
				<span>Lọc theo danh mục</span>
				<i className={isOpen ? styles.rotate : ''}>
					<Image src='/svgs/icons/arrow-down.svg' width={14} height={14} alt='Toggle filter' />
				</i>
			</button>

			<div className={`${styles.filter_panel} ${isOpen ? styles.open : ''}`}>
				<div className={styles.categories_wrapper}>
					{categories.map((category) => (
						<div key={category} className={styles.category_item}>
							<label className={`${open_sans.className}`}>
								<input
									type='checkbox'
									checked={selectedCategories.includes(category)}
									onChange={() => toggleCategory(category)}
								/>
								<span>{category}</span>
							</label>
						</div>
					))}
				</div>

				{selectedCategories.length > 0 && (
					<button onClick={clearFilters} className={`${styles.clear_filters} ${open_sans.className}`}>
						Xóa bộ lọc
					</button>
				)}
			</div>

			{selectedCategories.length > 0 && (
				<div className={styles.selected_categories}>
					<span className={`${montserrat.className} font-semibold`}>Đang lọc: </span>
					<div className={styles.category_chips}>
						{selectedCategories.map((category) => (
							<div key={category} className={styles.category_chip}>
								<span className={`${open_sans.className}`}>{category}</span>
								<button onClick={() => toggleCategory(category)}>x</button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
