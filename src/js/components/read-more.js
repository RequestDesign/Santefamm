import { dataMediaQueries, _slideUp, _slideDown } from '../utils';

function showMore() {
    const showMoreBlocks = document.querySelectorAll('[data-showmore]');
    let showMoreBlocksRegular;
    let mdQueriesArray;
    if (showMoreBlocks.length) {
        // get regular objects
        showMoreBlocksRegular = Array.from(showMoreBlocks).filter(function (item, index, self) {
            return !item.dataset.showmoreMedia;
        });
        // regular objects initialization
        showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;

        document.addEventListener('click', showMoreActions);
        window.addEventListener('resize', showMoreActions);

        // get objects with media queries
        mdQueriesArray = dataMediaQueries(showMoreBlocks, 'showmoreMedia');
        if (mdQueriesArray && mdQueriesArray.length) {
            mdQueriesArray.forEach((mdQueriesItem) => {
                // event
                mdQueriesItem.matchMedia.addEventListener('change', function () {
                    initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
            });
            initItemsMedia(mdQueriesArray);
        }
    }
    function initItemsMedia(mdQueriesArray) {
        mdQueriesArray.forEach((mdQueriesItem) => {
            initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
    }
    function initItems(showMoreBlocks, matchMedia) {
        showMoreBlocks.forEach((showMoreBlock) => {
            initItem(showMoreBlock, matchMedia);
        });
    }
    function initItem(showMoreBlock, matchMedia = false) {
        showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
        let showMoreContent = showMoreBlock.querySelectorAll('[data-showmore-content]');
        let showMoreButton = showMoreBlock.querySelectorAll('[data-showmore-button]');
        showMoreContent = Array.from(showMoreContent).filter(
            (item) => item.closest('[data-showmore]') === showMoreBlock
        )[0];
        showMoreButton = Array.from(showMoreButton).filter(
            (item) => item.closest('[data-showmore]') === showMoreBlock
        )[0];
        const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
        if (matchMedia.matches || !matchMedia) {
            if (hiddenHeight < getOriginalHeight(showMoreContent)) {
                _slideUp(showMoreContent, 0, hiddenHeight);
                showMoreButton.hidden = false;
            } else {
                _slideDown(showMoreContent, 0, hiddenHeight);
                showMoreButton.hidden = true;
            }
        } else {
            _slideDown(showMoreContent, 0, hiddenHeight);
            showMoreButton.hidden = true;
        }
    }
    function getHeight(showMoreBlock, showMoreContent) {
        let hiddenHeight = 0;
        const showMoreType = showMoreBlock.dataset.showmore ? showMoreBlock.dataset.showmore : 'size';
        if (showMoreType === 'items') {
            const showMoreTypeValue = showMoreContent.dataset.showmoreContent
                ? showMoreContent.dataset.showmoreContent
                : 3;
            const showMoreItems = showMoreContent.children;
            for (let index = 1; index < showMoreItems.length; index++) {
                const showMoreItem = showMoreItems[index - 1];
                hiddenHeight += showMoreItem.offsetHeight;
                if (index == showMoreTypeValue) break;
            }
        } else {
            const showMoreTypeValue = showMoreContent.dataset.showmoreContent
                ? showMoreContent.dataset.showmoreContent
                : 150;
            hiddenHeight = showMoreTypeValue;
        }
        return hiddenHeight;
    }
    function getOriginalHeight(showMoreContent) {
        let parentHidden;
        let hiddenHeight = showMoreContent.offsetHeight;
        showMoreContent.style.removeProperty('height');
        if (showMoreContent.closest(`[hidden]`)) {
            parentHidden = showMoreContent.closest(`[hidden]`);
            parentHidden.hidden = false;
        }
        let originalHeight = showMoreContent.offsetHeight;
        parentHidden ? (parentHidden.hidden = true) : null;
        showMoreContent.style.height = `${hiddenHeight}px`;
        return originalHeight;
    }
    function showMoreActions(e) {
        const targetEvent = e.target;
        const targetType = e.type;
        if (targetType === 'click') {
            if (targetEvent.closest('[data-showmore-button]')) {
                const showMoreButton = targetEvent.closest('[data-showmore-button]');
                const showMoreBlock = showMoreButton.closest('[data-showmore]');
                const showMoreContent = showMoreBlock.querySelector('[data-showmore-content]');
                const showMoreSpeed = showMoreBlock.dataset.showmoreButton
                    ? showMoreBlock.dataset.showmoreButton
                    : '500';
                const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
                if (!showMoreContent.classList.contains('_slide')) {
                    showMoreBlock.classList.contains('_showmore-active')
                        ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight)
                        : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
                    showMoreBlock.classList.toggle('_showmore-active');
                }
            }
        } else if (targetType === 'resize') {
            showMoreBlocksRegular && showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
            mdQueriesArray && mdQueriesArray.length ? initItemsMedia(mdQueriesArray) : null;
        }
    }
}

showMore();
