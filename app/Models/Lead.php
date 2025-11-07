<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    use HasFactory;

    protected $fillable = [
        'fullname',
        'phone',
        'email',
        'company',
        'product',
        'message',
        'user_id',
        'status',
    ];

    /**
     * Relation with User
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Accessor for status label
     */
    // public function getStatusLabelAttribute()
    // {
    //     return match($this->status) {
    //         0 => 'New',
    //         1 => 'Contacted',
    //         2 => 'Follow Up',
    //         3 => 'Interested',
    //         4 => 'Not Interested',
    //         5 => 'Closed',
    //         default => 'Unknown',
    //     };
    // }
}
