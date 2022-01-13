@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif

                    {{ __('You are logged in!') }}


                    <div class="site-blocks-cover" style="background-image: url(images/hero_bg_1.jpg);" data-aos="fade" data-stellar-background-ratio="0.5">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-7">
                                    <span class="sub-text">We Priority Your</span>
                                    <h1>Your <strong>New Smile</strong></h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="site-block-1">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="site-block-feature d-flex p-4 rounded mb-4">
                                        <div class="mr-3">
                                            <span class="icon flaticon-tooth font-weight-light text-white h2"></span>
                                        </div>
                                        <div class="text">
                                            <h3>Periontodology</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="site-block-feature d-flex p-4 rounded mb-4">
                                        <div class="mr-3">
                                            <span class="icon flaticon-tooth-whitening font-weight-light text-white h2"></span>
                                        </div>
                                        <div class="text">
                                            <h3>Tooth Whitening</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="site-block-feature d-flex p-4 rounded mb-4">
                                        <div class="mr-3">
                                            <span class="icon flaticon-tooth-pliers font-weight-light text-white h2"></span>
                                        </div>
                                        <div class="text">
                                            <h3>Preventative Care</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection