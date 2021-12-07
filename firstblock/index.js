const registerBlockType = wp.blocks.registerBlockType;
const __ = wp.i18n.__;

registerBlockType('mytheme-blocks/firstblock', {
    title: __('First Block', 'mytheme-blocks'),
    description: __('My first block', 'mytheme-blocks'),
    category: 'layout',
    edit: function() {
        return 'Editor';
    },
    save: function() {
        return 'Saved content';
    }
});