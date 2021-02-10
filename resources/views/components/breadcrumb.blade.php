<div class="breadcrumb-wrap">
    <div class="container-fluid">
        <ul class="breadcrumb">
            @foreach ($items as $name => $url)
                @if ($url === route(Route::currentRouteName()))
                    <li class="breadcrumb-item active">
                        {{ ucfirst($name) }}
                @else
                    <li class="breadcrumb-item">
                        <a href="{{ $url }}">{{ ucfirst($name) }}</a>
                @endif
                {{-- @if ($url === route(Route::currentRouteName()))
                    <li class="breadcrumb-item active">
                        {{ ucfirst($name) }}
                @else
                    <li class="breadcrumb-item">
                        <a href="{{ $url }}">{{ ucfirst($name) }}</a>
                @endif --}}
                </li>
            @endforeach
        </ul>
    </div>
</div>