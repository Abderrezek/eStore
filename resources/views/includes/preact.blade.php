@if (empty($props))
    <div id="rct-{{ $id }}"></div>
@else
    <div id="rct-{{ $id }}" data-props='@json($props)'></div>
@endif