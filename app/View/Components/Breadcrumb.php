<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Breadcrumb extends Component
{
    /**
     * Breadcrumb items Name & Url
     * @var string[]
     */
    public $items;

    /**
     * Create a new component instance.
     *
     * @param  string $items
     * @return void
     */
    public function __construct($items)
    {
        $this->items = $items;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.breadcrumb');
    }
}
